import { useForm } from "react-hook-form";
import axios from "axios";

interface IFormData {
  solution: string,
  fullName: string,
  companyName: string,
  email: string,
  mobile: string,
  orgSize: string
};
const formDefaultValue = {
    solution: "",
    fullName: "",
    companyName: "",
    email: "",
    mobile: "",
    orgSize: ""
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