import { StyleSheet } from 'react-native';

/**
 * COLOR VARIABLES
 */
// theme colors
export const themeBlue = '#008AD6';
export const darkThemeBlue = '#03547f';
export const themeGreen = '#D9FF00';
export const themeYellow = '#F2C300';
export const offWhite = '#eff0ee';
export const buttonBlue = '#0088d0';
// other colors
export const backgroundColor = '#0088d0';
export const ultraLightBlue = '#ABBCE0';
export const lightBlue = '#7593CD';
export const blue = '#0A58FD';
export const darkBlue = '#0A339F';
export const darkerBlue = '#0C1E6D';
export const red = '#E21600';
export const lightGreen = '#19FFA3';
export const green = '#00CC66';
export const greenGlowing = '#E1FF32';
export const darkGreen = '#2A6246';
export const yellow = '#FF9500';
export const ultralightGray = '#F2F2F2';
export const disabled = '#F8F8F8';
export const lighterTextColor = '#868686';
export const normalTextColor = '#535353';
export const darkTextColor = '#021E13';
export const darkerTextColor = '#191919';
export const themeRed = '#D30000';
export const accent1Color = '#1A1A1A';
export const navBarTextColor = '#FFFFFF';
export const whiteTextColor = '#FFFFFF';
export const lightBlack = '#303030';
export const darkGray = '#606060';
export const gray = '#949ea0';
export const lightGray = '#e0e1dd';
export const separatorColor = '#CCCCCC';
export const disabledRow = 'rgb(246, 246, 246)';
export const headerRegistrationColor = '#63B3C7';
export const headerColor = '#FFFFFF';

/**
 * ICONS SIZE VARIABLES
 */
export const smallerIcon = 22;
export const normalIcon = 25;
export const largeIcon = 28;
export const extraLargeIcon = 36;
export const inputHeight = 70;

/**
 * FONT SIZE VARIABLES
 */
export const h1 = 28;
export const h2 = 26;
export const h3 = 24;
export const h4 = 22;
export const h5 = 20;
export const h6 = 18;
export const smallerTextSize = 11;
export const smallTextSize = 13;
export const normalTextSize = 15;
export const largerTextSize = 17;

export let headerHeight = 62;
export let topDiff = 34;
export let bottomDiff = 0;
export let notificationPaddingTop = 25;
export let notificationPaddingBottom = 0;
export let cameraMarginBottom = 0;

/**
 * GLOBAL STYLES
 */
export const global = StyleSheet.create({
  container: {
    flex: 1,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  absoluteFull: {
    ...StyleSheet.absoluteFillObject,
  },
  width100: {
    width: '100%',
  },
  height100: {
    height: '100%',
  },
  contentContainer: {
    padding: 15,
  },
  padding20: {
    padding: 20,
  },
  whiteBackground: {
    backgroundColor: 'white',
  },
  ultralightGrayBackground: {
    backgroundColor: ultralightGray,
  },
  positionAbsolute: {
    position: 'absolute',
  },
  positionRelative: {
    position: 'relative',
  },
  topPaddingDiff: {
    paddingTop: topDiff,
  },
  bottomPaddingDiff: {
    paddingBottom: bottomDiff,
  },
  subtitle: {
    backgroundColor: '#F0F0F0',
    padding: 15,
  },
  subtitleLighter: {
    backgroundColor: '#F8F8F8',
    padding: 10,
    paddingHorizontal: 15,
  },

  // font color style
  whiteTextColor: {
    color: 'white',
  },
  ultraLightBlueTextColor: {
    color: ultraLightBlue,
  },
  lightBlueTextColor: {
    color: lightBlue,
  },
  blueTextColor: {
    color: blue,
  },
  greenTextColor: {
    color: green,
  },
  darkGreenTextColor: {
    color: darkGreen,
  },
  redTextColor: {
    color: red,
  },
  darkerBlueTextColor: {
    color: darkerBlue,
  },
  lightGrayTextColor: {
    color: lightGray,
  },
  themeBlueTextColor: {
    color: themeBlue,
  },
  grayTextColor: {
    color: gray,
  },
  lighterTextColor: {
    color: lighterTextColor,
  },
  ultralightTextColor: {
    color: ultralightGray,
  },
  normalTextColor: {
    color: normalTextColor,
  },
  darkBlueTextColor: {
    color: darkBlue,
  },
  darkTextColor: {
    color: darkTextColor,
  },
  darkerTextColor: {
    color: darkerTextColor,
  },
  themeYellowTextColor: {
    color: themeYellow,
  },
  themeRedTextColor: {
    color: themeRed,
  },
  errorTextColor: {
    color: `${themeRed}B3`,
  },

  // font size
  h1: {
    fontSize: h1,
    lineHeight: h1 + 6,
  },
  h2: {
    fontSize: h2,
    lineHeight: h2 + 6,
  },
  h3: {
    fontSize: h3,
    lineHeight: h3 + 6,
  },
  h4: {
    fontSize: h4,
    lineHeight: h4 + 6,
  },
  h5: {
    fontSize: h5,
    lineHeight: h5 + 6,
  },
  h6: {
    fontSize: h6,
    lineHeight: h6 + 6,
  },
  smallerTextSize: {
    fontSize: smallerTextSize,
    lineHeight: smallerTextSize + 4,
  },
  smallTextSize: {
    fontSize: smallTextSize,
    lineHeight: smallTextSize + 4,
  },
  normalTextSize: {
    fontSize: normalTextSize,
    lineHeight: normalTextSize + 4,
  },
  largerTextSize: {
    fontSize: largerTextSize,
    lineHeight: largerTextSize + 4,
  },

  lineThrough: {
    textDecorationLine: 'line-through',
  },
  underline: {
    textDecorationLine: 'underline',
  },

  boldWeight: {
    fontWeight: '600',
  },
  normalWeight: {
    fontWeight: 'normal',
  },

  // text align
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },

  // opacity
  opacity25: {
    opacity: 0.25,
  },
  opacity50: {
    opacity: 0.5,
  },
  opacity70: {
    opacity: 0.7,
  },
  opacity75: {
    opacity: 0.75,
  },
  opacity90: {
    opacity: 0.9,
  },
  opacity100: {
    opacity: 1,
  },

  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  // NAVIGATION STYLES
  headerStyle: {
    backgroundColor: headerColor,
    borderWidth: 0,
    borderBottomWidth: 0,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerHidden: {
    opacity: 0,
    backgroundColor: 'transparent',
  },
  tabIcon: {
    width: 28,
    height: 28,
  },
  logoContainer: {
    height: 150,
    width: 150,
  },
  logoImage: {
    width: 120,
    height: 24,
    alignSelf: 'center',
  },
  spinnerMarginHeader: {
    paddingHorizontal: 10,
  },

  // BOTTOM BUTTON
  customBottomButtonModal: {
    paddingTop: 18,
    paddingBottom: bottomDiff || 18,
  },
  customBottomButton: {
    paddingVertical: 5,
  },
  buttonDisabled: {
    backgroundColor: gray,
  },

  // COMMON STYLES
  evenBackground: {
    backgroundColor: `${offWhite}AA`,
  },
  oddBackground: {
    backgroundColor: 'white',
  },
  arrowUp: {
    transform: [{ rotate: '180deg' }],
  },
  arrowRight: {
    transform: [{ rotate: '-90deg' }],
  },
  arrowLeft: {
    transform: [{ rotate: '90deg' }],
  },
  spinner: {
    ...StyleSheet.absoluteFillObject,
  },
  flatlist: {
    paddingBottom: bottomDiff,
  },
  doneButtonContainer: {
    backgroundColor: 'white',
  },
  doneButtonAbsoluteContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 'auto',
  },
  reserveButton: {
    marginRight: 2,
  },
  bottomBorder: {
    borderBottomColor: lightGray,
    borderBottomWidth: 1,
  },
});

export const calendarStyle = StyleSheet.create({
  week: {
    marginTop: 1,
    marginBottom: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
