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
  VisuallyHidden,
  Loader,
  useTheme
} from "@aws-amplify/ui-react";

import { uploadData, remove } from "aws-amplify/storage";

const acceptedFileTypes = ["image/png", "image/jpeg"];

async function removePicture(key) {
  if (key) {
    try {
      await remove({ key: key }).then((key) => {
        console.log("Succesfully removed: ", key);
      });
    } catch (error) {
      console.error("Could not remove last pic: ", error);
    }
  }
}

function ImageUpload(props) {

  const hiddenInput = React.useRef(null);

  const { tokens } = useTheme();

  const errorBorderColor = tokens.colors.border.error.value;
  const borderColor = tokens.colors.border.primary.value;

  const [files, setFiles] = React.useState([]);
  const [progress, setProgress] = React.useState([]);

  const onFilePickerChange = (event) => {
    const { files } = event.target;
    console.log(files);
    if (!files || files.length === 0) {
      return;
    }
    setFiles(Array.from(files));
  };

  React.useEffect(() => {
    console.log("Files", files)
    const uploadPicture = async (file, ind) => {
      try {
        const result = await uploadData({
          key: `homepictures-${props.profile?.id}-${file.name}`,
          data: file,
          options: {
            onProgress: ({ transferredBytes, totalBytes }) => {
              if (totalBytes) {
                const load = Math.round(transferredBytes / totalBytes) * 100;
                console.log(`Upload progress ${load} %`);
                const newProgress = progress.map((value, index) =>
                  index === ind ? load : value
                );
                setProgress(newProgress);
              }
            },
          },
        }).result;
        console.log("Key from Response: ", result.key);
        return result.key;
      } catch (error) {
        console.log("Error : ", error);
        removePicture(`homepictures-${props.profile?.id}-${file.name}`);
        setFiles(files.filter((item) => item !== file))
      }
    };

    const uploadAllPictures = async () => {
        const promises = files.map(uploadPicture);
        const results = await Promise.all(promises);
        props.setPictures(results.filter((result) => result !== null));
    };

    if (files.length > 0) {
      uploadAllPictures();
    } else {
      props.setPictures([])
    }
  }, [files]);

  React.useEffect(() => {
    if (props.clearFiles) {
      console.log("clearing files")
      files.map((file) => {
        removePicture(`homepictures-${props.profile?.id}-${file.name}`);
      });
      setFiles([]);
    }
    props.setClearFiles(false);
  }, [props.clearFiles, props.setClearFiles]);

  React.useEffect(() => {
    if (props.resetFiles) {
      setFiles([])
    }
    props.setResetFiles(false)
  }, [props.resetFiles, props.setResetFiles])

  return (
    <Card
      variation="outlined"
      backgroundColor={"transparent"}
      border = {files.length === 0 ? `1px solid ${errorBorderColor}` : `1px solid ${borderColor}`}
      borderRadius="5px"
      position={"relative"}
      alignItems="flex-start"
      padding="0px 0px 0px 0px"
    >
      <DropZone
        backgroundColor={"transparent"}
        border="none"
        acceptedFileTypes={acceptedFileTypes}
        onDropComplete={({ acceptedFiles, rejectedFiles }) => {
          files.map((file) => {
            removePicture(`homepictures-${props.profile?.id}-${file.name}`);
          });
          setFiles(acceptedFiles);
        }}
      >
        <Flex
          alignItems="center"
          direction="column"
          padding="0px 0px 0px 0px"
          backgroundColor={"transparent"}
        >
          <Text>Drop House Pictures</Text>
          <Divider size="small" maxWidth="10rem" />
          <Button
            variation="primary"
            onClick={() => hiddenInput.current.click()}
          >
            Browse
          </Button>

          <VisuallyHidden>
            <input
              type="file"
              tabIndex={-1}
              ref={hiddenInput}
              onChange={onFilePickerChange}
              multiple={true}
              accept={acceptedFileTypes.join(",")}
            />
          </VisuallyHidden>

          <Flex direction="row" shrink="1" grow="1" wrap="wrap">
            {files.map((file, index) => (
              <Flex
                key={file.name}
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

                {progress[index] < 100 ? (
                  <Loader
                    position="absolute"
                    size="large"
                    percentage={progress[index]}
                    isDeterminate
                    isPercentageTextHidden
                  />
                ) : null}

                <Button
                  opacity="50"
                  borderRadius="xxl"
                  backgroundColor="background.primary"
                  position="absolute"
                  variation="link"
                  size="small"
                  onClick={() => {
                    removePicture(
                      `homepictures-${props.profile?.id}-${file.name}`
                    ).then(setFiles(files.filter((item) => item !== file)));
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
