import { ChangeEvent, FormEvent, useState } from "react";
import { Alert, Button, Form, Stack } from "react-bootstrap";

function MoodDetail() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const date = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${date}`;
  const formattedTime = currentDate.toLocaleTimeString();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const [formState, setFormState] = useState({
    mood: "",
    moodDetail: "",
    moodDate: formattedDate,
    moodTime: formattedTime,
    moodIntensity: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(JSON.stringify(formState));

    const response = await fetch("https://7tk9tul42g.execute-api.ap-southeast-2.amazonaws.com/v1/add_mood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    if (response.ok) {
      console.log("Form submitted successfully");
      setShowSuccess(true);
      setShowError(false);
    } else {
      console.error("Form submission failed");
      setShowError(true);
      setShowSuccess(false);
    }
  };

  return (
    <div>
      <Alert show={showSuccess} variant="success" dismissible>
        <Alert.Heading>Mood Entry Submitted</Alert.Heading>
        <p>Mood entry was submitted to the Server.</p>
        <hr />
      </Alert>

      <Alert show={showError} variant="danger" dismissible>
        <Alert.Heading>Mood Entry Failed</Alert.Heading>
        <p>Mood entry failed submition to the Server.</p>
        <hr />
      </Alert>

      <Form onSubmit={handleSubmit}>
        <Stack gap={1}>
          <div className="p-2">
            <Form.Group className="mb-3" controlId="moodForm.MoodInput">
              <Form.Label>Mood</Form.Label>
              <Form.Select name="mood" aria-label="Mood Selector" onChange={handleSelectChange}>
                <option>Open this select menu</option>
                <option value="1">Happy</option>
                <option value="2">Sad</option>
                <option value="3">Angry</option>
                <option value="4">Scared</option>
                <option value="5">Excited</option>
                <option value="6">Tender</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="p-2">
            <Form.Group className="mb-3" controlId="moodForm.Intensity">
              <Form.Label>Mood Intensity</Form.Label>
              <Form.Select name="moodIntensity" aria-label="Mood Selector" onChange={handleSelectChange}>
                <option>Open this select menu</option>
                <option value="1">Not so strong!</option>
                <option value="2">Bit stronger!</option>
                <option value="3">Bit stronger still!</option>
                <option value="4">Almost feeling it!</option>
                <option value="5">Feeling it!</option>
                <option value="6">Stronger feeling!</option>
                <option value="7">Even stronger feeling!</option>
                <option value="8">Getting to Wow!</option>
                <option value="9">Almost at Wow!</option>
                <option value="10">Wow!</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="p-2">
            <Form.Group className="mb-3" controlId="moodForm.MoodDetail">
              <Form.Label>Mood Detail</Form.Label>
              <Form.Control name="moodDetail" as="textarea" rows={3} onChange={handleInputChange} />
            </Form.Group>
          </div>
          <div className="p-2">
            <Form.Group className="mb-3" controlId="moodForm.Date">
              <Form.Label>Mood Date</Form.Label>
              <Form.Control type="text" name="moodDate" value={formState.moodDate} onChange={handleInputChange} />
            </Form.Group>
          </div>
          <div className="p-2">
            <Form.Group className="mb-3" controlId="moodForm.Time">
              <Form.Label>Mood Time</Form.Label>
              <Form.Control type="text" name="moodTime" value={formState.moodTime} onChange={handleInputChange} />
            </Form.Group>
          </div>
        </Stack>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default MoodDetail;
