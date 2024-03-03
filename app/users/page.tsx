// app/users/page.tsx

import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserPage = async () => {
  // キャッシュの設定 デフォルトでは fetchのデータをキャッシュする
  // 本設定は キャッシュしない設定にしているため本番環境でもページ際四見込み時に
  // <p>{new Date().toLocaleTimeString()}</p>の値が更新される
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserPage;
