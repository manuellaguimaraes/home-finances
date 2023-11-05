import React from "react";
import { useState } from "react";
import { Button, Flex } from "antd";
import { PlusCircleOutlined, EditFilled } from "@ant-design/icons";

export default function CrudButtons() {
    const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <Flex gap="small" wrap="wrap">
      <Button icon={<PlusCircleOutlined />} disabled={editMode}>NEW</Button>
      <Button icon={<EditFilled />} onClick={(e) => setEditMode(!editMode)}>EDIT</Button>
    </Flex>
  );
}
