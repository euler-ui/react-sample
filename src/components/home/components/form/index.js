import React from 'react';
import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';
import TimePicker from 'material-ui/TimePicker';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Toggle from 'material-ui/Toggle';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import { orange500, blue500 } from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import SelectFieldExampleSimple from './SelectFieldExampleSimple';
import SelectFieldExampleNullable from './SelectFieldExampleNullable';
import SelectFieldExampleCustomLabel from './SelectFieldExampleCustomLabel';
import SelectFieldExampleError from './SelectFieldExampleError';
import AutoCompleteExampleSimple from './AutoCompleteExampleSimple';

export const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
  radioButton: {
    marginBottom: 16,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
};

const TimePickerExampleSimple = () =>
  (<div>
    <TimePicker hintText="12hr Format" />
    <TimePicker hintText="12hr Format with auto ok" autoOk />
    <TimePicker format="24hr" hintText="24hr Format" />
    <TimePicker disabled format="24hr" hintText="Disabled TimePicker" />
  </div>);

const TextFields = () =>
  (<div>
    <h1>Basic</h1>
    <TextField hintText="Hint Text" />
    <br />
    <br />
    <TextField hintText="The hint text can be as long as you want, it will wrap." />
    <br />
    <TextField id="text-field-default" defaultValue="Default Value" />
    <br />
    <TextField hintText="Hint Text" floatingLabelText="Floating Label Text" />
    <br />
    <TextField defaultValue="Default Value" floatingLabelText="Floating Label Text" />
    <br />
    <TextField
      hintText="Hint Text"
      floatingLabelText="Fixed Floating Label Text"
      floatingLabelFixed
    />
    <br />
    <TextField hintText="Password Field" floatingLabelText="Password" type="password" />
    <br />
    <TextField hintText="MultiLine with rows: 2 and rowsMax: 4" multiLine rows={2} rowsMax={4} />
    <br />
    <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine
      rows={2}
    />
    <br />
    <TextField hintText="Full width" fullWidth />
  </div>);
const TextFieldExampleError = () =>
  (<div>
    <h1>Error examples</h1>
    <TextField hintText="Hint Text" errorText="This field is required" />
    <br />
    <TextField
      hintText="Hint Text"
      errorText="The error text can be as long as you want, it will wrap."
    />
    <br />
    <TextField
      hintText="Hint Text"
      errorText="This field is required"
      floatingLabelText="Floating Label Text"
    />
    <br />
    <TextField
      hintText="Message Field"
      errorText="This field is required."
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine
      rows={2}
    />
    <br />
  </div>);

const TextFieldExampleCustomize = () =>
  (<div>
    <h1>Styled examples</h1>
    <TextField hintText="Styled Hint Text" hintStyle={styles.errorStyle} />
    <br />
    <TextField
      hintText="Custom error color"
      errorText="This field is required."
      errorStyle={styles.errorStyle}
    />
    <br />
    <TextField hintText="Custom Underline Color" underlineStyle={styles.underlineStyle} />
    <br />
    <TextField
      hintText="Custom Underline Focus Color"
      underlineFocusStyle={styles.underlineStyle}
    />
    <br />
    <TextField
      floatingLabelText="Styled Floating Label Text"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    />
  </div>);
const TextFieldExampleDisabled = () =>
  (<div>
    <h1>Disabled examples</h1>
    <TextField disabled hintText="Disabled Hint Text" />
    <br />
    <TextField disabled id="text-field-disabled" defaultValue="Disabled Value" />
    <br />
    <TextField disabled hintText="Disabled Hint Text" floatingLabelText="Floating Label Text" />
    <br />
    <TextField
      disabled
      hintText="Disabled Hint Text"
      defaultValue="Disabled With Floating Label"
      floatingLabelText="Floating Label Text"
    />
  </div>);

const CheckboxExampleSimple = () =>
  (<div style={styles.block}>
    <h1>Checkboxs</h1>
    <Checkbox label="Simple" style={styles.checkbox} />
    <Checkbox
      checkedIcon={<ActionFavorite />}
      uncheckedIcon={<ActionFavoriteBorder />}
      label="Custom icon"
      style={styles.checkbox}
    />
    <Checkbox
      checkedIcon={<Visibility />}
      uncheckedIcon={<VisibilityOff />}
      label="Custom icon of different shapes"
      style={styles.checkbox}
    />
    <Checkbox label="Disabled unchecked" disabled style={styles.checkbox} />
    <Checkbox label="Disabled checked" checked disabled style={styles.checkbox} />
    <Checkbox label="Label on the left" labelPosition="left" style={styles.checkbox} />
  </div>);

const RadioButtonExampleSimple = () =>
  (<div>
    <h1>Radios</h1>
    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
      <RadioButton value="light" label="Simple" style={styles.radioButton} />
      <RadioButton value="not_light" label="Selected by default" style={styles.radioButton} />
      <RadioButton
        value="ludicrous"
        label="Custom icon"
        checkedIcon={<ActionFavorite />}
        uncheckedIcon={<ActionFavoriteBorder />}
        style={styles.radioButton}
      />
    </RadioButtonGroup>
    <RadioButtonGroup name="shipName" defaultSelected="community">
      <RadioButton
        value="enterprise"
        label="Disabled unchecked"
        disabled
        style={styles.radioButton}
      />
      <RadioButton value="community" label="Disabled checked" disabled style={styles.radioButton} />
    </RadioButtonGroup>
    <RadioButtonGroup name="notRight" labelPosition="left" style={styles.block}>
      <RadioButton value="reverse" label="Label on the left" style={styles.radioButton} />
    </RadioButtonGroup>
  </div>);

const ToggleExampleSimple = () =>
  (<div style={styles.block}>
    <h1>Toogles</h1>
    <Toggle label="Simple" style={styles.toggle} />
    <Toggle label="Toggled by default" defaultToggled style={styles.toggle} />
    <Toggle label="Disabled" disabled style={styles.toggle} />
    <Toggle label="Label on the right" labelPosition="right" style={styles.toggle} />
    <Toggle
      label="Styling"
      thumbStyle={styles.thumbOff}
      trackStyle={styles.trackOff}
      thumbSwitchedStyle={styles.thumbSwitched}
      trackSwitchedStyle={styles.trackSwitched}
      labelStyle={styles.labelStyle}
    />
  </div>);

const dataSource1 = [
  {
    text: 'text-value1',
    value: <MenuItem primaryText="text-value1" secondaryText="&#9786;" />,
  },
  {
    text: 'text-value2',
    value: <MenuItem primaryText="text-value2" secondaryText="&#9786;" />,
  },
];

const dataSource2 = ['12345', '23456', '34567'];

const dataSource3 = [
  {
    textKey: 'Some Text',
    valueKey: 'someFirstValue',
  },
  {
    textKey: 'Some Text',
    valueKey: 'someSecondValue',
  },
];
const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};

const AutoCompleteExampleNoFilter = () =>
  (<div>
    <h1>Data sources</h1>
    <AutoComplete
      hintText="text-value data"
      filter={AutoComplete.noFilter}
      dataSource={dataSource1}
    />
    <br />
    <AutoComplete
      floatingLabelText="showAllItems"
      filter={AutoComplete.noFilter}
      openOnFocus
      dataSource={dataSource2}
    />
    <br />
    <AutoComplete
      floatingLabelText="Same text, different values"
      filter={AutoComplete.noFilter}
      openOnFocus
      dataSource={dataSource3}
      dataSourceConfig={dataSourceConfig}
    />
  </div>);

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White'];

const fruit = [
  'Apple',
  'Apricot',
  'Avocado',
  'Banana',
  'Bilberry',
  'Blackberry',
  'Blackcurrant',
  'Blueberry',
  'Boysenberry',
  'Blood Orange',
  'Cantaloupe',
  'Currant',
  'Cherry',
  'Cherimoya',
  'Cloudberry',
  'Coconut',
  'Cranberry',
  'Clementine',
  'Damson',
  'Date',
  'Dragonfruit',
  'Durian',
  'Elderberry',
  'Feijoa',
  'Fig',
  'Goji berry',
  'Gooseberry',
  'Grape',
  'Grapefruit',
  'Guava',
  'Honeydew',
  'Huckleberry',
  'Jabouticaba',
  'Jackfruit',
  'Jambul',
  'Jujube',
  'Juniper berry',
  'Kiwi fruit',
  'Kumquat',
  'Lemon',
  'Lime',
  'Loquat',
  'Lychee',
  'Nectarine',
  'Mango',
  'Marion berry',
  'Melon',
  'Miracle fruit',
  'Mulberry',
  'Mandarine',
  'Olive',
  'Orange',
  'Papaya',
  'Passionfruit',
  'Peach',
  'Pear',
  'Persimmon',
  'Physalis',
  'Plum',
  'Pineapple',
  'Pumpkin',
  'Pomegranate',
  'Pomelo',
  'Purple Mangosteen',
  'Quince',
  'Raspberry',
  'Raisin',
  'Rambutan',
  'Redcurrant',
  'Salal berry',
  'Satsuma',
  'Star fruit',
  'Strawberry',
  'Squash',
  'Salmonberry',
  'Tamarillo',
  'Tamarind',
  'Tomato',
  'Tangerine',
  'Ugli fruit',
  'Watermelon',
];

const AutoCompleteExampleFilters = () =>
  (<div>
    <h1>Filters</h1>
    <AutoComplete
      floatingLabelText="Type 'r', case insensitive"
      filter={AutoComplete.caseInsensitiveFilter}
      dataSource={colors}
    />
    <br />
    <AutoComplete
      floatingLabelText="Type 'peah', fuzzy search"
      filter={AutoComplete.fuzzyFilter}
      dataSource={fruit}
      maxSearchResults={5}
    />
  </div>);

const DatePickerExampleSimple = () =>
  (<div>
    <h1>DatePicker Simple Examples</h1>
    <DatePicker hintText="Portrait Dialog" />
    <DatePicker hintText="Landscape Dialog" mode="landscape" />
    <DatePicker hintText="Dialog Disabled" disabled />
  </div>);
const DatePickerExampleInline = () =>
  (<div>
    <h1>DatePicker Inline Examples</h1>
    <DatePicker hintText="Portrait Inline Dialog" container="inline" />
    <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
  </div>);

function Form() {
  return (
    <div>
      <Tabs className="components-secondary-navbar">
        <Tab label="TextField">
          <TextFields />
          <TextFieldExampleError />
          <TextFieldExampleCustomize />
          <TextFieldExampleDisabled />
        </Tab>
        <Tab label="AutoComplete">
          <AutoCompleteExampleSimple />
          <AutoCompleteExampleNoFilter />
          <AutoCompleteExampleFilters />
        </Tab>
        <Tab label="Select">
          <SelectFieldExampleSimple />
          <SelectFieldExampleNullable />
          <SelectFieldExampleCustomLabel />
          <SelectFieldExampleError />
        </Tab>
        <Tab label="DatePicker">
          <DatePickerExampleSimple />
          <DatePickerExampleInline />
        </Tab>
        <Tab label="CheckBox & Radios & Toogle">
          <CheckboxExampleSimple />
          <RadioButtonExampleSimple />
          <ToggleExampleSimple />
        </Tab>
        <Tab label="TimePicker">
          <TimePickerExampleSimple />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Form;
