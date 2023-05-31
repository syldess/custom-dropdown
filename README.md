# Dropdown

This is a fully customizable Dropdown React Component.

## Purpose

To have a customizable dropdown component that relies on no other libraries.

## Usage

1. Clone or download this repo and add the `custom-dropdown` folder into your `src` folder.
2. From your `src/App.js`, import Dropdown:

```javascript
import Dropdown from './custom-dropdown/dropdown/Dropdown';
```

3. Add your custom placeholder as a component parameter (string)

Example:

```javascript
<Dropdown placeholder="Make A Choice" />
```

4. Add your choices (list of items)
   Example:

```javascript
<Dropdown
  ...
  choices={[
    "Item One",
    "Item Two",
    "Item Three",
    "Item Four",
    "Item Five",
    "Item Six",
    "Item Seven",
    "Item Eight",
    "Item Nine",
    "Item Ten",
    "Item Eleven",
    "This last entry is a very very long string to show how the rendering is within the dropdown",
  ]}
/>
```

5. Set your choice handle function

Example:

```javascript
// Choice handle function
handleChoice = (value) => {
  this.setState({ ...this.state, item: value });
};

<Dropdown
  ...
  handleChoice={this.handleChoice}
/>
```

6. Set optional styles (see details below)

### Styles

Here are the custom styles possibilities, using JSX.

<table>
<tr>
<td> Property </td> <td> Default </td>
</tr>
<tr>
<td> <em>customBtnStyle</em> </td>
<td>

```css
fontFamily: 'Arial, Helvetica, sans-serif',
display: 'inline-block',
backgroundColor: 'lightgrey',
width: '100%',
maxWidth: '200px',
border: 'solid 2px darkgrey',
borderRadius: '5px',
textAlign: 'center',
padding: '5px',
```

</td>
</tr>
<tr>
<td> <em>customIconStyle</em> </td>
<td>

```css
display: 'inline-block',
float: 'right',
marginTop: '4px',
marginLeft: '10px',
borderLeft: '8px solid transparent',
borderRight: '8px solid transparent',
borderTop: '8px solid darkgrey',
```

</td>
</tr>
<tr>
<td> <em>customUlStyle</em> </td>
<td>

```css
listStyle: 'none',
margin: '0',
padding: '5px',
```

</td>
</tr>
<tr>
<td> <em>customdropdownListStyle</em> </td>
<td>

```css
backgroundColor: 'lightgrey',
border: 'solid 2px darkgrey',
borderRadius: '5px',
width: '100%',
maxWidth: '200px',
maxHeight: '200px',
overflow: 'scroll',
textAlign: 'center',

```

</td>
</tr>
<tr>
<td> <em>customLiStyle</em> </td>
<td>

```css
'&hover': {
  backgroundColor: 'darkgrey',
  cursor: 'pointer',
},
```

</td>
</tr>
</table>

### Examples of styling

Simply calling the Dropdown component with the placeholder, choices list and handle function.

**default style**

![](https://github.com/syldess/images-for-react-components-showcase/blob/main/custom-dropdown/default.gif)

---

Example 1, adding custom style:

```javascript
<Dropdown
  ...
  customBtnStyle={{
    color: 'white',
    backgroundColor: 'teal',
    borderColor: 'black',
  }}
  customIconStyle={{
    borderTop: '8px solid white',
  }}
  customdropdownListStyle={{
    position: 'absolute',
    top: 310,
    color: 'white',
    backgroundColor: 'teal',
    borderColor: 'black',
  }}

/>
```

**custom style 1**

![](https://github.com/syldess/images-for-react-components-showcase/blob/main/custom-dropdown/custom1.gif)

---

Example 2, adding custom style:

```javascript
<Dropdown
  ...
  customBtnStyle={{
    color: '#bfff80',
    backgroundColor: 'black',
    borderColor: 'white',
  }}
  customIconStyle={{
    borderTop: '8px solid white',
  }}
  customdropdownListStyle={{
    color: '#bfff80',
    backgroundColor: 'black',
    borderColor: 'white',
  }}

/>
```

**custom style example 2**

![](https://github.com/syldess/images-for-react-components-showcase/blob/main/custom-dropdown/custom2.gif)

## Demo

Try it on [CodePen](https://codepen.io/sylvaindessureault/full/LYgKVWV).

For the old version using a Class Component, you can check the [CodePen here](https://codepen.io/sylvaindessureault/pen/MWPapgb).

## License

Copyright (c) 2020 Sylvain Dessureault.

Distributed under the MIT license. See LICENSE for more information.
