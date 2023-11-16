export const printForm = (event: Event) => {
  const currentInput = event.target as HTMLFormElement;
  let form = [...(currentInput.form as HTMLFormElement).elements] as HTMLFormElement[];

  let formObject: { [key: string]: string } = {};

  form.forEach((item: HTMLFormElement) => {
    if (item.localName === 'input'){
      formObject[item.name] = item.value;
    }
  });

  console.log(formObject);
}
