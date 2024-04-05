import { ChangeEvent, useState } from "react";
import { Form, Stack } from "react-bootstrap";

function MoodDetail() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const date = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${date}`;
  const formattedTime = currentDate.toLocaleTimeString();

  const [moodDate, setMoodDate] = useState(formattedDate);
  const [moodTime, setMoodTime] = useState(formattedTime);

  const onMoodDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMoodDate(event.target.value);
    console.log(event.target.value);
  };

  const onMoodTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMoodTime(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <Stack gap={1}>
        <div className="p-2">
          <Form.Group className="mb-3" controlId="moodForm.MoodInput">
            <Form.Label>Mood</Form.Label>
            <Form.Select aria-label="Mood Selector">
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
          <Form.Group className="mb-3" controlId="moodForm.MoodDetail">
            <Form.Label>Mood Detail</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </div>
        <div className="p-2">
          <Form.Group className="mb-3" controlId="moodForm.Date">
            <Form.Label>Mood Date</Form.Label>
            <Form.Control type="text" value={moodDate} onChange={onMoodDateChange} />
          </Form.Group>
        </div>
        <div className="p-2">
          <Form.Group className="mb-3" controlId="moodForm.Time">
            <Form.Label>Mood Time</Form.Label>
            <Form.Control type="text" value={moodTime} onChange={onMoodTimeChange} />
          </Form.Group>
        </div>
        <div className="p-2">
          <Form.Group className="mb-3" controlId="moodForm.Intensity">
            <Form.Label>Mood Intensity</Form.Label>
            <Form.Select aria-label="Mood Selector">
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
      </Stack>
    </div>
  );
}

export default MoodDetail;
