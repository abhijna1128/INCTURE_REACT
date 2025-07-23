function NameList() {
  const names = ["Abhijna", "Shreelakshmi", "Krithika", "Sudeep", "Krishna"];
  return (
    <div>
      <h2>Name List:</h2>
      <ul>
        {names.map((c_name, c_index) => (
          <li key={c_index}>{c_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;
const addPerson = () => {
    if (newPersonName && newPersonAge) { // Basic validation
      const newPerson = { 
        id: Date.now(), 
        name: newPersonName, 
        age: parseInt(newPersonAge) 
      };
      setPersons([...persons, newPerson]);
      setNewPersonName(''); // Clear input fields after adding
      setNewPersonAge('');
    } else {
      alert('Please enter both name and age.');
    }
  };