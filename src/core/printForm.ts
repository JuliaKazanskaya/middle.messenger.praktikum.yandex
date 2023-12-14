export const printForm = (event: Event) => {
  const currentInput = event.target as HTMLFormElement;
  const form = [...(currentInput.form as HTMLFormElement).elements] as HTMLFormElement[];

  const formObject: { [key: string]: string } = {};

  form.forEach((item: HTMLFormElement) => {
    if (item.localName === 'input') {
      formObject[item.name] = item.value;
    }
  });

  console.log(formObject);
};
