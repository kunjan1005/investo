import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { customers } from '../sampleData/customer';

// import Result from '../components/result';

export default function WithMultipleCheckboxes() {
  const [datatable, setDatatable] = React.useState(customers);
  const [checkbox1, setCheckbox1] = React.useState([]);

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };

  return (
    <>
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={datatable}
        checkbox
        headCheckboxID='id6'
        bodyCheckboxID='checkboxes6'
        getValueCheckBox={(e) => {
          showLogs2(e);
        }}
        getValueAllCheckBoxes={(e) => {
          showLogs2(e);
        }}
        multipleCheckboxes
      />

      {/* <Result>
        {' '}
        {checkbox1 && (
          <p>
            {JSON.stringify(
              checkbox1.map((e) => {
                console.log(e);
                delete e.checkbox;
                return e;
              }) && checkbox1
            )}
          </p>
        )}
      </Result> */}
    </>
  );
}