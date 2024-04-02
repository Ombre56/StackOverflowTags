import { InputComponent } from "../components/InputComponent";

export default {
  title: 'Input',
  component: InputComponent,
};

export const Filled = () => <InputComponent variant='filled' />
export const Outlined = () => <InputComponent variant='outlined' />
export const Standard = () => <InputComponent variant='standard' />

export const Label = {
  args: {
    label: 'Wprowadź liczbę',
  },
}