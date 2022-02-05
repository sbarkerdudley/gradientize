import React, { useState } from 'react';


export default function useAuth() {
  const [authed, setAuthed] = useState(false);

  return [
    authed,
    function() {
      return new Promise((resolve) => {
        setAuthed(true)
        resolve()
      })
    },
    function() {
      return new Promise((resolve) => {
        setAuthed(false)
        resolve()
      })
    },
  ]
};
