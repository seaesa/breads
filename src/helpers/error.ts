import { AxiosError } from 'axios';

export const handleAxiosErorr = (error: AxiosError) => {
  if (error.response) {
    console.group('Error:', {
      status: error.response.status,
      headers: error.response.headers,
      data: error.response.data,
    });
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log(error.message);
  }
};
