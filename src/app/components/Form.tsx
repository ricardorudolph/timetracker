import {
  Button,
  ButtonGroup,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Input,
  Tooltip,
  useColorModeValue,
  useEditableControls,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import { timeStamp, useDataContext } from "../context/dataContext";

export function InputForm() {
  const { data, setData, setContext } = useDataContext();

  const formik = useFormik({
    initialValues: {
      start: "",
      end: "",
      breaks: {
        break_start: "",
        break_end: "",
      },
      isVacation: false,
    },
    onSubmit: (values) => {
      const newArray: timeStamp[] = [
        {
          start: new Date(),
          end: new Date(),
          breaks: [
            {
              break_start: new Date(),
              break_end: new Date(),
            },
          ],
          isVacation: values.isVacation,
        },
      ];
      setContext(newArray);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex px="4" justify="center" align="flex-end">
        <Flex direction="column" px="4">
          <label htmlFor="start">Start</label>
          <Input
            id="start"
            name="start"
            type="time"
            onChange={formik.handleChange}
            value={formik.values.start}
          />
        </Flex>
        <Flex direction="column" px="4">
          <label htmlFor="end">End</label>
          <Input
            id="end"
            name="end"
            type="time"
            onChange={formik.handleChange}
            value={formik.values.end}
          />
        </Flex>
        {/* <Checkbox
          id="vacation"
          name="vacation"
          onChange={formik.handleChange}
          value={formik.values.on_vacation}
        /> */}
        <Button type="submit">Save</Button>
      </Flex>
    </form>
  );
}

export function EditableField(FieldInput: string) {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
        <IconButton
          aria-label=""
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          aria-label=""
          icon={<CloseIcon boxSize={3} />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : null;
  }

  return (
    <Editable
      defaultValue={FieldInput}
      isPreviewFocusable={true}
      selectAllOnFocus={false}
    >
      <Flex>
        <EditablePreview
          py={2}
          p={4}
          _hover={{
            background: useColorModeValue("gray.100", "gray.700"),
          }}
        />
        <Input py={2} px={4} as={EditableInput} />
        <EditableControls />
      </Flex>
    </Editable>
  );
}
