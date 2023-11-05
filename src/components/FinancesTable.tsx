import React from "react";
import { useState } from "react";
import { Table, Checkbox } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
// import editMode from "./CrudButtons";

interface DataType {
  key: React.Key;
  payer: string;
  product: string;
  price: string;
  checkPersonOne: boolean;
  personOne: string;
  checkPersonTwo: boolean;
  personTwo: string;
  date: string;
}

export default function FinancesTable() {
  const [checkPerson, setCheckPerson] = useState<boolean>(true);

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    setCheckPerson(e.target.checked);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Paid for",
      dataIndex: "payer",
    },
    {
      title: "Product",
      dataIndex: "product",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Person 1",
      render: (personOne: string) => (
        <Checkbox onChange={onChange} checked={checkPerson}>{personOne}</Checkbox>
      ),
      dataIndex: "personOne",
    },
    {
      title: "Person 2",
      render: (personTwo: string) => (
        <Checkbox onChange={onChange}>{personTwo}</Checkbox>
      ),
      dataIndex: "personTwo",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      payer: "Guilherme",
      product: "Energy",
      price: "€" + 30000.0,
      checkPersonOne: true,
      personOne: "Matheus",
      checkPersonTwo: false,
      personTwo: "Manuella",
      date: "03 Nov 2023",
    });
  }

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 50 }}
      scroll={{ y: 240 }}
    />
  );
}
