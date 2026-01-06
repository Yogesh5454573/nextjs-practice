"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

type User = {
  id: number;
  name: string;
  email: string;
  mobile: string;
};

export default function EditUserPage() {
  const router = useRouter();
  const params = useParams();
  const userId = Number(params.id);

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://nextjs-api.in/api/getUserData/${userId}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          setUser(result.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!user) return;

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const res = await fetch(
        `http://nextjs-api.in/api/updateUser/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            mobile: user.mobile,
          }),
        }
      );
      const data = await res.json();
      if (data.status) {
        router.push("/manageUsers");
      } else {
        alert("Update failed!");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div className="module">
      <div className="module-head">
        <h3>Edit User</h3>
      </div>
      <div className="module-body">
        <form className="form-horizontal row-fluid" onSubmit={handleSubmit}>
          <div className="control-group">
            <label className="control-label">Name:</label>
            <div className="controls">
              <input
                name="name"
                type="text"
                className="span8"
                placeholder="Enter Your Name"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="control-group">
            <label className="control-label">Email:</label>
            <div className="controls">
              <input
                name="email"
                type="text"
                className="span8"
                placeholder="Enter Your Email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="control-group">
            <label className="control-label">Mobile:</label>
            <div className="controls">
              <input
                name="mobile"
                type="text"
                className="span8"
                placeholder="Enter Your Mobile"
                value={user.mobile}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="control-group">
            <div className="controls">
              <button  className="btn btn-primary" style={{ marginRight: "10px" }} type="submit">Submit</button>
               <Link href="/manageUsers" className="btn btn-danger">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
}
