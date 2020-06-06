import React, { useState, useEffect } from 'react';
import { Container, Title } from './Itineraries.styles.js';
import { Form } from 'semantic-ui-react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Itineraries() {
  const [countries, setCountries] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((json) => {
        setCountries(json);
      });
  }, []);

  const selectOptions = countries.map((country: any) => {
    return {
      value: country,
      label: country.name,
    };
  });

  const styles = {
    container: (base) => ({
      ...base,
      width: 800,
      zIndex: 99999,
    }),
  };

  return (
    <>
      <Container>
        <Title>Itineraries</Title>
        <Form>
          <Form.Group>
            <Select
              styles={styles}
              options={selectOptions}
              // onChange={handleUpdateCountry}
              list="countries"
              placeholder="Choose Country..."
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="Date" placeholder="Add date">
              <DatePicker
                selected={date}
                onChange={(newDate) => {
                  setDate(newDate);
                }}
              />
            </Form.Input>
            <Form.Input fluid label="Location" placeholder="Add Location" />
            <Form.Input fluid label="Time" placeholder="Add time" />
          </Form.Group>
          <Form.TextArea
            label="Activity"
            placeholder="Add your activity here"
          />
          <Form.Button>Add</Form.Button>
        </Form>
      </Container>
    </>
  );
}

export default Itineraries;
