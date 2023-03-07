@echo off
echo "Deploying to GCP"
echo Building image...

docker build -t gcr.io/spmproject-371903/supplierportal:20230209 .
echo "Image built successfully"
@REM gcloud config set project spmproject-371903
@REM gcloud config set compute/region asia-southeast1
@REM gcloud auth login
@REM docker tag supplierportal:20230209 gcr.io/spmproject-371903/supplierportal:20230209
@REM gcloud auth configure-docker
docker push gcr.io/spmproject-371903/supplierportal:20230209
echo "Image successfully pushed to GCP"