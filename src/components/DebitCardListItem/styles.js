import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  crosstextcontainer: {
    backgroundColor: 'grey',
    borderRadius: 50,
    padding: 5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crosstext: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  scrollviewText: {
    fontSize: 26,
    color: 'white',
  },
  scrollview: {
    paddingTop: 20,
    width: '100%',
  },
  scrollviewItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
    alignSelf: 'center',
    padding: 10,
    margin: 5,
    width: '90%',
    borderRadius: 10,
  },
  title: {
    fontSize: 64,
    color: 'lightgrey',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'red',
    //borderWidth: 2,
    borderBottomWidth: 2,
    width: '70%',
    // borderRadius: 50,
    fontSize: 16,
    padding: 10,
  },
});
