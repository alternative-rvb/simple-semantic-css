console.log("script include loaded");
export const includeElmt = async (path,) => {
  const r = await fetch(path);
  if (r.ok === true) {
    return r.text();
  }
};
