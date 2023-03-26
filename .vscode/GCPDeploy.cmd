@echo off
echo "Deploying to GCP"
echo Building image...

docker build -t gcr.io/steam-form-381714/supplierportal:20230326 .
echo "Image built successfully"
@REM gcloud config set project steam-form-381714
@REM gcloud config set compute/region asia-southeast1
@REM gcloud auth login
@REM docker tag supplierportal:20230326 gcr.io/steam-form-381714/supplierportal:20230326
@REM gcloud auth configure-docker
docker push gcr.io/steam-form-381714/supplierportal:20230326
echo "Image successfully pushed to GCP"