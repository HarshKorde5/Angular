# Property Binding

Property binding binds component data to DOM.
Property binding binds component data to html element properties.

Properties like :
- disabled
- readonly
- src
- alt

Any html property can be binded using `[property_name] = "variable_name_in_ts"`.

Using interpolation like for example : `<button disabled = {{variable_name}}>click me </button>` will convert the variable_name inside {{}} into string and won't work.Especially with boolean values, true false get converted to string.

Target of Property binding is to bind properties of html element with component for dynamic values.