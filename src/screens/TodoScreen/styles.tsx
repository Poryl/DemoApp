import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/Colors';
import {GUIDELINES} from '../../theme/Guidelines';

export const styles = StyleSheet.create({
  crosstextcontainer: {
    backgroundColor: COLORS.grey,
    borderRadius: 50,
    padding: GUIDELINES.paddingSM,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crosstext: {
    fontSize: GUIDELINES.fontSizeSM,
    color: COLORS.red,
    fontWeight: 'bold',
  },
  scrollviewText: {
    fontSize: GUIDELINES.fontSizeXXL,
    color: COLORS.white,
  },
  scrollviewTextDate: {
    fontSize: GUIDELINES.fontSizeXS,
    color: COLORS.white,
  },
  scrollview: {
    paddingTop: GUIDELINES.paddingXL,
    width: '100%',
  },
  scrollviewItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
    alignSelf: 'center',
    padding: GUIDELINES.paddingSM1,
    margin: GUIDELINES.marginSM,
    width: '90%',
    borderRadius: 10,
  },
  scrollviewItemContent: {
    flexDirection: 'row',
    flex: 1
  },
  scrollviewItemContentTitleAndDate: {
    flex: 1,
    marginLeft: 10
  },
  title: {
    fontSize: GUIDELINES.fontSizeXXXL,
    color: COLORS.grey2,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingTop: GUIDELINES.paddingXXL1,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderColor: COLORS.red,
    borderBottomWidth: 2,
    width: '70%',
    fontSize: GUIDELINES.fontSizeSM,
    padding: GUIDELINES.paddingSM1,
  },
});
