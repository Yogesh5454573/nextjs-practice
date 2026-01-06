"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  mobile: string;
};

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://nextjs-api.in/api/getData");
      const result = await res.json();
      if (result.status) setUsers(result.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      const res = await fetch(
        `http://nextjs-api.in/api/deleteUser/${id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
          },
        }
      );

      const data = await res.json();

      if (data.status) {
        alert("User deleted successfully");
        fetchUsers(); 
      } else {
        alert("Delete failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="module">
      <div className="module-head">
        <div className="row-fluid">
          <div className="span6">
            <h3>Manage Users</h3>
          </div>
          <div className="span6">
            <Link className="btn-success btn-sm pull-right" href="/manageUsers/addUser">
              Add User
            </Link>
          </div>
        </div>
      </div>

      <div className="module-body table">
        <table
          cellPadding={0}
          cellSpacing={0}
          className="datatable-1 table table-bordered table-striped	 display"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "even gradeC" : "odd gradeX"}
                >
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="center">{user.mobile}</td>
                  <td className="center">
                    <Link href={`/manageUsers/editUser/${user.id}`}>Edit</Link>
                  </td>
                  <td className="center">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
