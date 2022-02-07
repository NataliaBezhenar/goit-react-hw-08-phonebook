const getLoading = (state) => state.contacts.loading;

const getAllContacts = (state) => state.contacts.items;

const contactSelectors = {
  getLoading,
  getAllContacts,
};
export default contactSelectors;
