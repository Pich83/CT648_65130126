import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ShowResearch = () => {
  const checkToken = localStorage.getItem('token');
  if (!checkToken) {
    window.location.href = '/login';
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            หัวข้องานวิจัย : Motorcycle Detection By YOLOv7
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ความคืบหน้างานวิจัย : ดกำลังดำเนินการ
          </Typography>
          <Typography variant="body2" color="text.secondary">
            รายละเอียดงานวิจัย : <br/>
            เพื่อศึกษาการประมวลภาพ เพื่อตรวจจับรถจักรยานยนต์และศึกษาลักษณะของรถจักรยานยนต์ในรูปแบบต่างๆ ด้วย YOLOv7 </Typography>

        </CardContent>
        <a href="/">Home</a>
      </Card>
    </div>
  );
};

export default ShowResearch;
