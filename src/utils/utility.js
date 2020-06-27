
import queryString from 'query-string';
import PAGES from 'constants/links/pages';

const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const avatars = [
  '/assets/images/avatars/001.png',
  '/assets/images/avatars/002.png',
  '/assets/images/avatars/003.png',
  '/assets/images/avatars/004.png',
  '/assets/images/avatars/005.png',
  '/assets/images/avatars/006.png',
  '/assets/images/avatars/007.png',
  '/assets/images/avatars/008.png',
  '/assets/images/avatars/009.png',
  '/assets/images/avatars/010.png',
  '/assets/images/avatars/011.png',
  '/assets/images/avatars/012.png',
  '/assets/images/avatars/013.png',
  '/assets/images/avatars/014.png',
  '/assets/images/avatars/015.png',
  '/assets/images/avatars/016.png',
  '/assets/images/avatars/017.png',
  '/assets/images/avatars/018.png',
  '/assets/images/avatars/019.png',
  '/assets/images/avatars/020.png'
];

const isEmpty = value => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};

const formatBytes = (bytes) => {
  const decimals = 2
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  if (bytes === 0) return '0 Bytes';
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const getCurrentTimeBySecond = () => {
  return Math.floor(new Date().getTime() / 1000.0);
}

const getFontColorOfName = (name) => {
  const colors =
    ['#FF2929', '#FF7A29', '#FAD02E', '#91FA49',
      '#36D8B7', '#3B8AFF', '#991EF9', '#FF5DCD'];

  const letterPosition = alphabet.indexOf(name.charAt(0).toLowerCase());
  return colors[letterPosition % colors.length];
}

const getDefaultAvatar = (key) => {
  const index = parseInt(key, 16);
  return avatars[index % avatars.length];
}

const getEncodeParams = (params) => {
  try {
    const url = queryString.stringify(params);
    const token = btoa(url);
    return token;
  } catch (error) {
    return null
  }
}

const getDecodeParams = (token) => {
  try {
    const url = atob(token);
    const params = queryString.parse(url);
    return params;
  } catch (error) {
    return null
  }
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const getContributors = (videos) => {
  let contributors = [];
  let educatorIds = []

  for (const video of videos) {
    if (!isEmpty(video.video)) {
      const { video: { event: { educator = {} } = {} } = {} } = video;

      if (!educatorIds.includes(educator._id)) {
        educatorIds = [
          ...educatorIds,
          educator._id
        ]

        contributors = [
          ...contributors,
          educator
        ]
      }
    }
  }

  return contributors;
}

const getStreamPlayerURL = ({ educatorName, eventId, videoId }) => {
  if (!educatorName) {
    educatorName = 'unknown_name'
  }
  educatorName = educatorName.toLowerCase().replace(/ /g, '_');

  if (!!videoId) {
    return PAGES.STREAM_PLAYER_VIDEO.url
      .replace('[educatorName]', educatorName)
      .replace('[eventId]', eventId)
      .replace('[videoId]', videoId)
  } else {
    return PAGES.STREAM_PLAYER_LIVESTREAM.url
      .replace('[educatorName]', educatorName)
      .replace('[eventId]', eventId)
  }
}

const removeItemWithSlice = (items, index) => {
  return [...items.slice(0, index), ...items.slice(index + 1)]
};

export {
  isEmpty,
  formatBytes,
  getCurrentTimeBySecond,
  getFontColorOfName,
  getDefaultAvatar,
  getEncodeParams,
  getDecodeParams,
  delay,
  getContributors,
  getStreamPlayerURL,
  removeItemWithSlice
};
