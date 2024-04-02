import { ButtonComponent } from "../components/ButtonComponent";

export default {
  title: 'Button',
  component: ButtonComponent,
};

export const Primary = () => <ButtonComponent color='primary' />
export const Secondary = () => <ButtonComponent color='secondary' />
export const Success = () => <ButtonComponent color='success' />