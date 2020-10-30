export const types = {
  FAKE_AUTH: 'FAKE_AUTH',
};

export const fakeAuth = (payload: boolean) => ({
  type: types.FAKE_AUTH,
  payload,
});
