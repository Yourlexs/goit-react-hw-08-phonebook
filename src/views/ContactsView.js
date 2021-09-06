import ContactForm from '../Components/ContactForm';
import Filter from '../Components/Filter';
import ContactList from '../Components/ContactList';

const contactsView = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default contactsView;
