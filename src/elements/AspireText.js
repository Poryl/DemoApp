import React from 'react';
import {Text, StyleSheet} from 'react-native';
import I18n from 'res/locales/i18n';
import {COLORS} from '../utils/theme/Colors';

export const AspireText = (props) => {
  const {
    text,
    textStyle,
    numberOfLines,
    color,
    size,
    isBold,
    weight,
    isItalic,
    letterSpacing,
  } = props;
  const textColor = color || COLORS.white;
  const fontSize = size || 20;
  const fontWeight = isBold ? 'bold' : 'normal';
  const fontStyle = isItalic ? 'italic' : 'normal';
  const customStyle = {
    fontSize,
    fontStyle,
    color: textColor,
    fontWeight: weight ? weight : fontWeight,
    letterSpacing: letterSpacing ? letterSpacing : undefined,
    // fontFamily: GlobalStyle.fontFamily,
    // fontFamily: Platform.select({
    //   ios: 'Inter-Bold',
    //   android: 'Inter-Bold',
    // }),
  };
  return (
    <Text
      style={[styles.text, customStyle, {...textStyle}]}
      numberOfLines={numberOfLines}
      {...this.props}>
      {I18n.t(text, {defaultValue: text})}
    </Text>
  );
};

// export default class CustomText extends React.PureComponent {
//   static TYPE = {
//     Title: 'Title',
//     Subtitle: 'Subtitle',
//     Description: 'Description',
//     MiniThing: 'MiniThing',
//   };

//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     EventBus.getInstance().addListener(
//       GlobalString.Event.UpdateLanguage,
//       (this.listener = (data) => {
//         this.forceUpdate();
//       }),
//     );
//   }

//   componentWillUnmount() {
//     EventBus.getInstance().removeListener(this.listener);
//   }

//   render() {
//     const {
//       text,
//       textStyle,
//       onPress,
//       numberOfLines,
//       disableHitSlop,
//       replaceObj,
//       isUpperCase,
//     } = this.props;
//     var fontStyle = this.getTextStyle();
//     const translation = this.translation(text, replaceObj);
//     if (onPress) {
//       if (disableHitSlop) {
//         return (
//           <TouchableOpacity onPress={this._onPress}>
//             <Text
//               style={[styles.text, fontStyle, {...textStyle}]}
//               numberOfLines={numberOfLines}
//               {...this.props}>
//               {isUpperCase ? translation.toUpperCase() : translation}
//             </Text>
//           </TouchableOpacity>
//         );
//       } else {
//         return (
//           <TouchableOpacity
//             onPress={this._onPress}
//             hitSlop={GlobalStyle.hitSlop}>
//             <Text
//               style={[styles.text, fontStyle, {...textStyle}]}
//               numberOfLines={numberOfLines}
//               {...this.props}>
//               {isUpperCase ? translation.toUpperCase() : translation}
//             </Text>
//           </TouchableOpacity>
//         );
//       }
//     }
//     return (
//       <Text
//         style={[styles.text, fontStyle, {...textStyle}]}
//         numberOfLines={numberOfLines}
//         {...this.props}>
//         {isUpperCase ? translation.toUpperCase() : translation}
//       </Text>
//     );
//   }

//   _onPress = () => {
//     this.props.onPress();
//   };

//   getTextStyle() {
//     const {color, size, isBold, weight, isItalic, letterSpacing} = this.props;
//     const textColor = color || GlobalStyle.color.white;
//     const fontSize = size || 20;
//     const fontWeight = isBold ? 'bold' : 'normal';
//     const fontStyle = isItalic ? 'italic' : 'normal';
//     var style = {
//       fontSize,
//       fontStyle,
//       color: textColor,
//       fontWeight: weight ? weight : fontWeight,
//       letterSpacing: letterSpacing ? letterSpacing : undefined,
//       // fontFamily: GlobalStyle.fontFamily,
//       // fontFamily: Platform.select({
//       //   ios: 'Inter-Bold',
//       //   android: 'Inter-Bold',
//       // }),
//     };
//     return style;
//   }

//   translation = (key, replaceObj) => {
//     if (!replaceObj) {
//       if (key?.en) {
//         const value = key[I18n.locale];
//         if (value) {
//           return value;
//         }
//         return '';
//       } else {
//         return I18n.t(key, {defaultValue: key});
//       }
//     }
//     let translation = I18n.t(key, {defaultValue: key});
//     replaceObj.forEach((obj) => {
//       translation = translation.replace(`{${obj.key}}`, obj.value);
//     });
//     return translation;
//   };
// }

const styles = StyleSheet.create({
  text: {
    // fontFamily: GlobalStyle.fontFamily,
    // includeFontPadding: false,
    // // paddingTop: 3,
    // // paddingBottom: 3,
    // paddingLeft: 0,
  },
});
