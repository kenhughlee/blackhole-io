import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const NewTaskForm = (props) => {
  let taskTypes = props.taskTypes.map((type, i) => <MenuItem key={i} value={type} primaryText={type} />);
  return (
    <div>
      <h3>Add New Task: </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addTask();
        }}
        style={{'marginLeft': '2%'}}
      >
        <div>
          <TextField
            name='name'
            hintText='new task name...'
            value={props.newTask.name}
            onChange={props.handleNewTaskInputChange}
          />
        </div>
        <div>
          <SelectField
            name='taskType'
            hintText='new task type...'
            onChange={props.handleNewTaskSelectChange}
            value={props.newTask.taskType}
          >
            {taskTypes}
          </SelectField>

        </div>
        {props.newTask.taskType === 'Todo' || props.newTask.taskType === 'Reminder' ? <div>
          <DatePicker
            name='date'
            locale='en-US'
            container='inline'
            mode='landscape'
            hintText={`add ${props.newTask.taskType} date...`}
            value={props.newTask.date instanceof Date ? props.newTask.date : {}}
            onChange={props.handleNewTaskDateChange}
          />
        </div> : null}
        <div>
          <IconButton type="submit">
            <FontIcon className='fa fa-plus' />
          </IconButton>
        </div>
      </form>
    </div>
  );
};

export default NewTaskForm;
