// KindaCode.com
// src/App.js

// Dummy data for the app
const employees = [
  {
    id: 'e1',
    name: 'Person One',
    salary: 5000
  },
  {
    id: 'e2',
    name: 'Person Two',
    salary: 6000
  },
  {
    id: 'e3',
    name: 'Person Three',
    salary: 4500
  },
  {
    id: 'e4',
    name: 'Person Four',
    salary: 7000
  },
  {
    id: 'kindacode.com',
    name: 'Person Five',
    salary: 8000
  }
]

function App() {
  return (
    <div style={styles.container}>
      <h1>Employee List</h1>

      {/* Render the list */}
      <div>
        {employees.map((employee) =>
          <div key={employee.id} style={styles.listItem}>
            <h3>{employee.name}</h3>
            <p>Salary: {employee.salary}</p>
          </div>)
        }
      </div>
    </div>
  );
}

// Styling 
const styles = {
  container: {
    backgroundColor: '#fff9c4',
    padding: '10px 50px 60px 50px',
    color: '#444'
  },
  listItem: {
    borderTop: '1px dashed #ccc'
  }
}

export default App;