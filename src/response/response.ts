export const success = <T>(data: T, message = 'Success', statusCode = 200) => ({
  success: true,
  message,
  data,
  statusCode,
});

export const fail = (message = 'Error', statusCode = 500, data?: any) => ({
  success: false,
  message,
  data: data || null,
  statusCode,
}); 