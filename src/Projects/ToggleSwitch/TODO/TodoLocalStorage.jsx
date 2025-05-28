const todokey = "reacttodo";
export const Getlocalstoragedat = () => {
    const rowData = localStorage.getItem(todokey);
        if(!rowData) return[];
        return JSON.parse(rowData);
}

export const Setlocalstoragedat = (task) => {
  return  localStorage.setItem(todokey, JSON.stringify(task)) 
}