export default function About() {
  const team = [
    { name: "Lakshya", role: "Frontend Developer" },
    { name: "Member 2", role: "Backend Developer" },
    { name: "Member 3", role: "UI/UX Designer" },
    { name: "Member 4", role: "Database Manager" },
    { name: "Member 5", role: "Tester" },
    { name: "Member 6", role: "Project Manager" }
  ];

  return (
    <>
  
      <div className="container my-5">

        {/* Project Info */}
        <div className="mb-5 text-center">
          <h2 className="fw-bold">About Thriftify</h2>
          <p className="text-muted mt-3">
            Thriftify is a platform for buying, selling, and donating second-hand clothes.
            It aims to promote sustainable fashion and help users save money while reducing waste.
          </p>
        </div>

        {/* Features */}
        <div className="mb-5">
          <h4 className="fw-bold mb-3">Features</h4>
          <ul className="list-group">
            <li className="list-group-item">Browse second-hand clothes</li>
            <li className="list-group-item">Upload and sell items easily</li>
            <li className="list-group-item">Contact sellers directly</li>
            <li className="list-group-item">Donate unused clothes</li>
            <li className="list-group-item">Simple and responsive UI</li>
          </ul>
        </div>

        {/* Team Section */}
        <div>
          <h4 className="fw-bold mb-4 text-center">Our Team</h4>

          <div className="row g-4">
            {team.map((member, index) => (
              <div className="col-sm-6 col-md-4" key={index}>
                <div className="card text-center shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="text-muted">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}