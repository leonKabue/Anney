import * as React from "react";
import {
  Card,
  Button,
  Flex,
  Text,
  Divider,
  Image,
  Icon,
  DropZone,
  VisuallyHidden
} from "@aws-amplify/ui-react";

const acceptedFileTypes = ["image/png", "image/jpeg"];

function ImageUpload(props) {
  const [files, setFiles] = React.useState([]);
  const hiddenInput = React.useRef(null);

  const onFilePickerChange = (event) => {
    const { files } = event.target;
    console.log(files);
    if (!files || files.length === 0) {
      return;
    }
    setFiles(Array.from(files));
  };

  return (
    <Card
      variation="outlined"
      backgroundColor={"transparent"}
      borderRadius="5px"
      position={"relative"}
      id={props.id}
      alignItems="flex-start"
      padding="0px 0px 0px 0px"
    >
      <DropZone
        backgroundColor={"transparent"}
        border="none"
        acceptedFileTypes={acceptedFileTypes}
        onDropComplete={({ acceptedFiles, rejectedFiles }) => {
          setFiles(acceptedFiles);
        }}
      >
        <Flex
          id={props.id}
          alignItems="center"
          direction="column"
          padding="0px 0px 0px 0px"
          backgroundColor={"transparent"}
        >
          <Text>Drop House Pictures</Text>
          <Divider size="small" maxWidth="10rem" />
          <Button id={props.id} variation="primary" onClick={() => hiddenInput.current.click()}>
            Browse
          </Button>

          <VisuallyHidden>
          <input
            type="file"
            tabIndex={-1}
            ref={hiddenInput}
            onChange={onFilePickerChange}
            multiple={true}
            accept={acceptedFileTypes.join(',')}
          />
        </VisuallyHidden>

          <Flex direction="row" shrink="1" grow="1" wrap="wrap">

            {files.map(( file ) => (
              <Flex
                justifyContent="center"
                alignItems="center"
                width="5rem"
                height="5rem"
                position="relative"
              >
                <Image
                  borderRadius="small"
                  height="100%"
                  objectFit="cover"
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  onLoad={() => URL.revokeObjectURL(file)}
                />

                <Button
                  opacity="50"
                  borderRadius="xxl"
                  backgroundColor="background.primary"
                  position="absolute"
                  variation="link"
                  size="small"
                  onClick={() => {
                    setFiles(files.filter(item => item !== file))
                  }}
                >
                  <Icon
                    fontSize="large"
                    color="font.error"
                    viewBox={{ width: 512, height: 512 }}
                    paths={[
                      {
                        d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z",
                        strokeWidth: "32",
                        fill: "none",
                        strokeMiterlimit: "10",
                        stroke: "currentColor",
                      },
                      {
                        d: "M320 320L192 192m0 128l128-128",
                        strokeWidth: "32",
                        fill: "none",
                        strokeLinecap: "round",
                        stroke: "currentColor",
                      },
                    ]}
                  />
                </Button>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </DropZone>
    </Card>
  );
}

export default ImageUpload;
