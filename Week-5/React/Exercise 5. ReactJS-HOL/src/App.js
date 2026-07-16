import CohortDetails from "./Components/CohortDetails";

function App() {

  return (

    <div>

      <h1>Cohorts Details</h1>

      <CohortDetails

        name="INTADMDF10 - .NET FSD"

        started="10-Feb-2025"

        status="Scheduled"

        coach="Anitha"

        trainer="John"

      />

      <CohortDetails

        name="ADM21JF014 - Java FSD"

        started="08-Apr-2025"

        status="Ongoing"

        coach="Suresh"

        trainer="Elisa Smith"

      />

      <CohortDetails

        name="CDBSJ21025 - Java FSD"

        started="08-Apr-2025"

        status="Ongoing"

        coach="Krishna"

        trainer="John Doe"

      />

    </div>

  );

}

export default App;