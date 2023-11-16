export const printForm = (event: Event) => {
  let form = [...(event.target as HTMLFormElement).elements] as Element[];

  let formObject: { [key: string]: string } = {};

  form.forEach((item: HTMLInputElement) => {
    if (item.localName === 'input') {
      const inputElement = item as HTMLInputElement;
      formObject[inputElement.name] = inputElement.value;
    }
  });

  console.log(formObject);
};
