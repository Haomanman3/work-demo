export const fn = () => { 
  return (rule: any, value: any, callback: any) => {
    const regex = /^[\w-]{4,16}$/;
    if (value === "") {
      callback(new Error("请输入用户名"));
    } else if (!regex.test(value)) {
      callback(new Error("用户名格式不正确"));
    }
    callback();
  };
};
