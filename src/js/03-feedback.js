import throttle from 'lodash.throttle';

const localStorageKey = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
const baseFormState = { email: '', message: '' };

const setLocalStorageData = data => {
  const json = JSON.stringify(data);
  localStorage.setItem(localStorageKey, json);
};

const getLocalStorageData = () => {
  let result = '';
  try {
    result = JSON.parse(localStorage.getItem(localStorageKey));
  } catch (error) {
    console.log(error.message);
    return;
  }
  return result;
};

const handleInput = ({ target: { name, value } }) => {
  formState[name] = value;
  setLocalStorageData(formState);
};

const handleSubmit = e => {
  e.preventDefault();

  formRef.reset();
  localStorage.removeItem(localStorageKey);
  Object.keys(formState).forEach(el => (formState[el] = ''));
};

const firstData = getLocalStorageData();

const formState = { ...baseFormState, ...firstData };

Object.keys(formState).forEach(el => (formRef[el].value = formState[el]));

formRef.addEventListener('input', throttle(handleInput, 1500));
formRef.addEventListener('submit', handleSubmit);