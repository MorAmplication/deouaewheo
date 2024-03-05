import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Address 1" source="address_1" />
        <TextField label="Address 2" source="address_2" />
        <TextField label="City" source="city" />
        <TextField label="State" source="state" />
        <TextField label="Zip" source="zip" />
      </SimpleShowLayout>
    </Show>
  );
};
