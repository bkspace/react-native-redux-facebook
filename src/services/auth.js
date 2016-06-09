export function getServerAuthToken() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('fakeAuthToken');
    }, 5000);
  });
}
