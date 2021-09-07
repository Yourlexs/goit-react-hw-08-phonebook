const styles = {
  container: {
    textAlign: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Hello and Welcome!</h1>
    <p>Here you can store contacts</p>
  </div>
);

export default HomeView;
