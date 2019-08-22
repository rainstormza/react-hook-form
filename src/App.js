import React, { useRef, useEffect, Profiler } from 'react';
import logo from './logo.svg';
import './App.css';
import useForm from 'react-hook-form';
import InputMaterial from '@material-ui/core/Input';
import { Form, Select, Input, Button } from 'antd';
const { Option } = Select;

function App(props) {
  const inputRef = useRef();
  const { register, handleSubmit, errors, watch, setValue } = useForm({ mode: 'onBlur', }); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  }; // callback when validation pass
  console.log('errors:', errors)

  console.log(watch('firstname'))
  // const { getFieldDecorator } = props.form;

  // const handleSubmitAntd = e => {
  //   e.preventDefault();
  //   props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //     }
  //   });
  // };

  // const handleSelectChange = value => {
  //   console.log(value);
  //   props.form.setFieldsValue({
  //     note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
  //   });
  // };

  useEffect(() => {
    // register(inputRef.current.input);
    // register({ name: "fullName" });
    // register({ name: "email" });
    // register({ name: 'firstname', required: true });
  }, [inputRef, register]);

  return (
    <div className="App">

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input name="firstname" ref={register({ required: true })} /> */}
        {/* <Input onChange={e => setValue("firstname", e.target.value, true)} /> */}
        <Profiler id="Input" onRender={console.log}>
          <InputMaterial name="firstname" inputRef={register({ required: true })} />
        </Profiler>
        {errors.firstname && <p>First name is required.</p>}

        {/* <input name="lastname" ref={register({ required: true })} />
        {errors.lastname && 'Last name is required.'}

        <input name="age" type="number" ref={register({ pattern: /\d+/ })} />
        {errors.age && 'Please enter number for age.'} */}
        <br />
        <input type="submit" />
      </form>



      {/* <Form
        onSubmit={e => {
          handleSubmit(data => {
            console.log(data);
          })(e);
        }}>
        <Form.Item>
          <Input
            placeholder="full name"
            onChange={e => setValue("fullName", e.target.value, true)} />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="email"
            onChange={e => setValue("email", e.target.value, true)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Signup
        </Button>
        </Form.Item>
      </Form> */}
    </div>
  );
}

// export default Form.create({ name: 'coordinated' })(App);
export default (App);
