import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { Button, Modal, Form, Icon } from 'semantic-ui-react';
import { CountryContext } from '../../contexts/CountryContext';
import { MapContext } from '../../contexts/MapContext';
import { CountryData } from '../../types/countries';

function AddDestination() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { countries } = useContext(CountryContext);

  const {
    visitedCountries,
    setVisitedCountries,
    bucketlistCountries,
    setBucketlistCountries,
  } = useContext(MapContext);

  const [country, setCountry] = useState<CountryData | null>(null);
  const [isHaveBeenThere, setIsHaveBeenThere] = useState(true);
  const [notes, setNotes] = useState('');

  function handleUpdateCountry(e) {
    setCountry(e.value);
  }

  function handleUpdateNotes(e) {
    setNotes(e.target.value);
  }

  function resetForm() {
    setCountry(null);
    setIsHaveBeenThere(true);
    setNotes('');
    setIsModalOpen(false);
  }

  function handleSubmit() {
    if (!country) return;

    isHaveBeenThere
      ? setVisitedCountries(visitedCountries.concat({ country, notes }))
      : setBucketlistCountries(bucketlistCountries.concat({ country, notes }));

    resetForm();
  }

  const selectOptions = countries
    .map((country) => {
      return {
        value: country,
        label: country.name,
      };
    })
    .filter((country) => {
      if (
        //@ts-ignore
        visitedCountries.some((c) => c.country.name === country.value.name) ||
        //@ts-ignore
        bucketlistCountries.some((c) => c.country.name === country.value.name)
      ) {
        return false;
      }
      return true;
    });

  const styles = {
    container: (base) => ({
      ...base,
      width: 400,
      zIndex: 99999,
    }),
  };

  return (
    <Modal
      onClose={() => setIsModalOpen(false)}
      open={isModalOpen}
      trigger={<Button onClick={() => setIsModalOpen(true)} icon="add" />}
    >
      <Modal.Header>Add a Destination</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Group widths="equal">
              <Select
                styles={styles}
                options={selectOptions}
                onChange={handleUpdateCountry}
                list="countries"
                placeholder="Choose Country..."
              />
            </Form.Group>
            <Form.Group grouped>
              <Form.Field
                label="I Have Been Here"
                control="input"
                type="radio"
                name="htmlRadios"
                checked={isHaveBeenThere}
                onChange={() => setIsHaveBeenThere(true)}
              />
              <Form.Field
                label="I Want To Go Here"
                control="input"
                type="radio"
                name="htmlRadios"
                checked={!isHaveBeenThere}
                onChange={() => setIsHaveBeenThere(false)}
              />
            </Form.Group>
            <Form.Field>
              {/* <Button animated>
                <Button.Content visible>Add a Photo</Button.Content>
                <Button.Content hidden>
                  <Icon name='photo' />
                </Button.Content>
              </Button> */}
            </Form.Field>
            <Form.Field
              value={notes}
              onChange={handleUpdateNotes}
              label="Add Notes"
              control="textarea"
              rows="3"
            />
            <Form.Field>
              <Button disabled={!country} onClick={handleSubmit} animated>
                <Button.Content visible>Submit</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default AddDestination;
