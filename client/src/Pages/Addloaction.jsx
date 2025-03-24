import React from "react";
import { useForm } from "@mantine/form";
import { validateString } from "../../utils/common";
import useCountries from "../../hooks/useCountries";
import Map from "@/components/common/Map";
import { Select, TextInput, Button, Group } from "@mantine/core";

const AddLocation = ({ propertyDetails, setPropertyDetails, nextStep }) => {
  const { getAll } = useCountries();
  const form = useForm({
    initialValues: {
      country: propertyDetails?.country || "",
      city: propertyDetails?.city || "",
      address: propertyDetails?.address || "",
    },
    validate: {
      country: (value) => validateString(value),
      city: (value) => validateString(value),
      address: (value) => validateString(value),
    },
  });

  const { country, city, address } = form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({ ...prev, city, address, country }));
      nextStep();
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col space-y-6 mt-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Left Side - Inputs */}
        <div className="flex flex-col flex-1 space-y-4">
          <Select
            withAsterisk
            label="Country"
            clearable
            searchable
            data={getAll()}
            {...form.getInputProps("country", { type: "input" })}
          />
          <TextInput
            withAsterisk
            label="City"
            {...form.getInputProps("city", { type: "input" })}
          />
          <TextInput
            withAsterisk
            label="Address"
            {...form.getInputProps("address", { type: "input" })}
          />
        </div>
        {/* Right Side - Map */}
        <div className="flex-1 h-64 md:h-auto">
          <Map address={address} city={city} country={country} />
        </div>
      </div>
      {/* Button */}
      <Group position="center" mt={"xl"}>
        <Button type="submit">Next Step</Button>
      </Group>
    </form>
  );
};

export default AddLocation;
