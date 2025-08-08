import { useForm } from "react-hook-form";
import axios from "axios";

interface IFormData {
  "field[125]": string,
  firstName: string,
  customer_account: string,
  email: string,
  phone: string,
  "field[123]": string
};
const formDefaultValue = {
    "field[125]": "",
    firstName: "",
    customer_account: "",
    email: "",
    phone: "",
    "field[123]": ""
}

export const useSubmitForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm<IFormData>({
        defaultValues: formDefaultValue,
    });

    //Temporarily not used
    const onSubmit = async (data: IFormData) => {
        try {
            const response = await axios.post("https://infrontapac.activehosted.com/proc.php", data);
            console.log("Success: ", response.data)
        } catch (error: any) {
            console.error("Error:", error.response?.data || error.message);
        }
    };


    return ({
        register,
        handleSubmit,
        watch,
        onSubmit,
        errors,
    });
}