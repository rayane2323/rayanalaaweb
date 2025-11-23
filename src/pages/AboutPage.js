import aboutImg from '../Assets/About.png';

export default function AboutPage() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">About BookStore</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={aboutImg}                        
            className="img-fluid rounded shadow mb-4"
            alt="Library"
          />
        </div>
   </div>
   </div>
  );
}