import { Box, Button, TextField, InputAdornment, SvgIcon } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { EXPORT, IMPORT } from "../../../../../utils/constants";

const TopToolbar = (props) => {
  const { title } = props;

  return (
    <Box {...props}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
          height: "100%",
          borderRadius: "4px",
          my: 3,
          padding: "32px",
          gap: "32px",
          backgroundColor: "colors.white",
          boxShadow:
            "rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px",
        }}
      >
        <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
          <TextField
            fullWidth
            sx={{ height: "38px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            label={`Search ${title}`}
            variant="outlined"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <Button
            size="small"
            variant="outlined"
            sx={{ height: "38px" }}
            startIcon={<FileUploadIcon />}
          >
            {IMPORT}
          </Button>
          <Button
            size="medium"
            sx={{ mx: 1, height: "38px" }}
            variant="outlined"
            startIcon={<FileDownloadIcon />}
          >
            {EXPORT}
          </Button>
          <Button
            size="small"
            color="primary"
            variant="contained"
            sx={{ height: "38px" }}
          >
            Add {title}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TopToolbar;
